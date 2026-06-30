# Floorplan

> "Floorplanning is the art of any physical design."

Floorplanning is a critical stage that determines the layout of a VLSI design. It is the process of locating I/Os and macros in the core area in order to optimize the available area and design resources. A well-optimized floorplan enables an ASIC design with enhanced efficiency and optimal space — it determines the die size, defines the boundary and core area, and creates the routing tracks and site rows based on the technology standards for routing and standard cell placement.

## Sanity Checks Before Starting the Floorplan

### Library checks

- Consistency between the physical and logical library
- Missing libraries
- Missing cell information
- Missing pins
- Duplicate cells

### Design checks

- Floating input pins and nets
- Multidrive nets
- Mismatched pins
- Undriven input ports
- Unloaded outputs
- Unconstrained pins
- No direct connection between VDD and VSS
- Pin mismatch counts between an instance and its reference
- Tristate buses with non-tristate drivers
- Wire loops across hierarchies

### Constraint checks

- All flops are clocked or not
- No unconstrained paths
- Input and output delays
- Multi-clock driven registers
- Unconstrained endpoints
- Missing slew or load constraint for a port
- Missing clock definition

## Inputs

- Technology file (`.tf`)
- Physical library (`.lef`)
- Timing library (`.lib`)
- Netlist (`.v`)
- Power domain information (`.upf`)
- Initial floorplan DEF (`.def`) — contains I/O and block size information

## Outputs

- Floorplan database
- Floorplan DEF
- Die / block area
- I/O placed
- Macros placed
- Blockages created
- Keep-out margins defined
- Power grid design
- Power pre-routing
- Standard cell placement areas

## Important Terminology

### Core utilization

Utilization defines the area occupied by the standard cells, macros, and other cells. If core utilization is 0.8 (80%), that means 80% of the core area is used for placing the standard cells, macros, and other cells, and the remaining 20% is reserved for routing.

```
core utilization = (macro area + std cell area + pad area) / total core area
```

### Aspect ratio

The ratio between horizontal routing resources and vertical routing resources — equivalently, the ratio of height to width.

### Macros

- Any instance other than a standard cell, loaded as a black box to the design, is a macro.
- Includes Intellectual Property (IP) such as RAM, ROM, PLL, analog designs, etc.
- **Hard macro** — IP with layout implemented.
- **Soft macro** — IP without layout implemented (HDL only).

### Rows

Rows are the locations where cells get placed. Rows can be core or I/O, and are created at the floorplan stage.

### Site

Sites are the minimum unit of placement. Rows are multiples of the site definition — the smallest unit of placement where the smallest cell can be placed is called a site. This is technology-dependent and varies with the process node.

### Routing tracks

- Horizontal and vertical lines drawn on the layout area which guide interconnections.
- The routing grid is made up of routing tracks.
- Routing tracks can be grid-based, gridless-based, or sub-grid-based.

### Manufacturing grid

- The smallest geometry that a semiconductor foundry can process — the smallest resolution of the technology process (e.g., 0.005).
- All drawn geometries during physical design must snap to this grid.
- The fab uses this as a reference for masking.

### Placement grid

- Made up of standard cell sites.
- Always a multiple of the manufacturing grid.
- Made up of rows, which are in turn composed of sites.

### Fly-lines

Virtual connections between a macro and another macro, or between macros and I/Os.

## Block Size Estimation

### Block shape types

- Square
- Rectangle
- Rectilinear
- L-shape
- T-shape

The height and width of a block are determined based on the utilization factor and aspect ratio.

**Example:**

```
area of netlist  = 10 mm²
utilization       = 65%
aspect ratio      = 1

area of block = area of netlist / utilization factor
              = 10 / 0.65
              = 15.3846 mm²
```

Since the aspect ratio is 1, the block is square:

```
area of square = side²
15.3846 = side²
side = √15.3846
side = 3.9223 mm
```

## Types of Floorplan Techniques

- **Abutted** — the chip is divided into blocks with no gap between them.
- **Non-abutted** — there is a gap between blocks, and the connection between blocks is made through routing nets.
- **Mixed** — a combination of abutted and non-abutted design.

## Macro Placement Guidelines

- Place macros at the boundary.
- Leaves more area for standard cells.
- Gives tools more flexibility.
- Enables efficient place & route.
- Helps reduce congestion issues.
- Consider I/O-to-macro connectivity.
- Consider macro-to-macro connectivity.
- Place macros in logic groups.

## Channel Space Between Macros

Channel space between macros is not determined by a fixed equation — it is always defined by analysis of the design. The equation below gives an approximation:

```
channel space = (no. of routing pins × pitch) / no. of layers (horizontal or vertical) + buffer spacing
```

**Example:**

Assume two macros with 50 pins each, a pitch of 0.6, and a total of 12 horizontal and vertical layers (M0, M2, M4, M6, M8, M10 horizontal; M1, M3, M5, M7, M9, M11 vertical), with a buffer size of 3.52.

```
no. of macro pins        = 50
pitch                     = 0.60
no. of available routing layers (per direction) = 6
buffer spacing            = 3.52

channel space = (50 × 0.60) / 6 + 3.52
              = 13.52 units
```

This is not applicable in all cases, since all macros must connect to power-ground rails — the channel space must be kept greater than the spacing between one pair of power-ground nets. Also leave space for physical cells and optimization cells by determining their height and width.

## Keep-out Margin / Halo

- A region around fixed macros where no other macros or standard cells can be placed near the macro boundary.
- The width of the keep-out margin on each side of the fixed cell can be the same or different, depending on how it's defined.
- Keeping cell placement out of such regions avoids congestion and produces better QoR.
- The halo of two adjacent macros can overlap.
- If a macro moves from one place to another, its halo moves with it.

**Two types of halo:**

- **Hard** — no cells are allowed to be placed in the halo region.
- **Soft** — optimization cells are allowed in the halo region.

## Placement Blockages

- Blockages are specific locations where the placement of cells is blocked.
- Blockages don't guide the tool — they prevent standard cells, buffers, and inverters from being placed in a particular area.
- If a macro moves from one place to another, blockages do **not** move with it.

**Three types of blockages:**

- Soft
- Hard
- Partial

### Hard blockages

- No standard cells, macros, or buffers/inverters can be placed within the specified area during coarse placement, optimization, and legalization.
- Used to avoid routing congestion at macro corners.
- Controls power rail generation around macros.

### Soft blockages

- Only buffers can be placed.
- Prevents placement of standard cells and hard macros within the specified area during coarse placement, but allows placement of buffers/inverters during optimization, legalization, and clock tree synthesis.

### Partial blockages

- Limit the cell density in the specified area.
- By default, the blockage factor is 100% (no cells can be placed), but it can be changed to reduce density without fully blocking the area.
- Example: a partial blockage with a maximum allowed cell density of 60% (blocked % = 40) enclosed by a rectangle with corners (10, 20) and (100, 200).
