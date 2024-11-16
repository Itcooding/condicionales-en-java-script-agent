let go = 0
player.onChat("1", function () {
    shapes.line(
    REDSTONE_BLOCK,
    world(-45, -1, 20),
    world(-29, -1, 20)
    )
    shapes.line(
    GOLD_BLOCK,
    world(-45, -1, -6),
    world(-29, -1, -6)
    )
    shapes.line(
    DIAMOND_BLOCK,
    world(-45, -1, -20),
    world(-29, -1, -20)
    )
})
player.onChat("2", function () {
    agent.teleport(world(-37, 0, 20), NORTH)
    go = 1
    while (go == 1) {
        agent.move(FORWARD, 1)
        agent.place(DOWN)
        if (agent.inspect(AgentInspection.Block, DOWN) == REDSTONE_BLOCK) {
            agent.move(FORWARD, 1)
        }
        if (agent.inspect(AgentInspection.Block, DOWN) == GOLD_BLOCK) {
            agent.move(FORWARD, 1)
            gameplay.setWeather(THUNDER)
            gameplay.title(mobs.target(ALL_PLAYERS), "Upsi LLuvia", "Tápate")
        }
        if (agent.inspect(AgentInspection.Block, DOWN) == DIAMOND_BLOCK) {
            agent.move(FORWARD, 1)
            gameplay.timeSet(gameplay.time(MIDNIGHT))
            gameplay.title(mobs.target(ALL_PLAYERS), "Upsi Lava", "Vuela")
            for (let index = 0; index < 8; index++) {
                shapes.line(
                LAVA,
                randpos(
                world(-45, -1, -20),
                world(-48, -1, -23)
                ),
                randpos(
                world(-30, -1, -28),
                world(-27, -1, -25)
                )
                )
            }
            go = 0
        }
    }
})
