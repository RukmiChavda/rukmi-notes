# Placement

Placement is the process of finding a suitable physical location for each cell in the block. The tool only determines the location of each standard cell on the die.

## Pre-Placement Checks

- All ports placed and fixed
- No overlaps of ports
- All macros properly placed on the placement grid and fixed
- No macro overlaps
- Power domain on the placement grid
- All blockages derived properly
- Physical cells uniformly placed
- Power plan DRC clean
- SDC is proper
- Scandef is proper

## Goal of Placement

- Timing, power, and area optimization
- Routable design
- Minimum cell density and pin density (reduces congestion due to cells and pins)
- Minimum timing DRCs

## Inputs

- Floorplan DEF (`.def`)
- Synopsys Design Constraints (`.sdc`) — contains MCMM
- Scan-chain information (`.scandef`)
- Netlist (`.v`)
- Technology file (`.tf`)
- Physical library (`.lef`)
- Timing library (`.lib`)
- Power domain information (`.upf`)

## Outputs

- Placement DEF
- Congestion report
- Timing report
- Logs

## Placement Objectives

- Congestion
- Performance (timing)
- Power
- Routability
- Placement runtime

## Placement Methods

- **Timing Driven Placement**
- **Congestion Driven Placement**

## Placement Stages

1. Create placement
2. Legalize placement
3. Congestion analysis
4. Placement optimization (initial DRC, initial optimization, final place, final optimization)

### Create placement

- Approximate the location of each standard cell
- Scan-chain reordering
- Tie cell placement

### Legalize placement

- Remove overlaps of cells
- Place cells based on legal rules

### Initial DRC

- High fanout net synthesis
- DRC optimization (`max_fanout`, `max_capacitance`, `max_transition`)
- Legalization placement

### Initial place

- Timing optimization

## Congestion Reduction Techniques

- Keep-out margin
- Hard blockages
- Partial blockages
- Bounds
