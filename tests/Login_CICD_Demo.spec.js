import { test, expect } from '@playwright/test';
test.setTimeout(500000);
import { commonSteps } from '../pages/commonSteps';
import { playerAction } from '../pages/playerAction';

test('UH_9429_HALo | Configuration | Events & Offers | Quick Offers | Sort Quick Offers by Name, Description, Start Date, End Date and Display Date', async ({ page }) => {
    const common = new commonSteps(page)
    // const pa = new playerAction(page)

  await common.goToHALOWebApplication()
  await common.loginAndSubmit("TU_LAB_HALO_NIN_ADM","Password01@$")


  await common.logout();

});
