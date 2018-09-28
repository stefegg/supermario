export function createDashboardLayer(font, playerEnv) {
  const LINE1 = font.size;
  const LINE2 = font.size * 2;


  return function drawDashboard(context) {
    const {score, time} = playerEnv.playerController;

    font.print('TROLLIO', context, 16, LINE1);
    font.print(score.toString().padStart(6, '0'), context, 20, LINE2);
    font.print('TIME', context, 408, LINE1);
    font.print(time.toFixed().toString().padStart(3, '0'), context, 416, LINE2);

  };
}
