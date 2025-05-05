import { testWithSynpress } from '@synthetixio/synpress';
import { Phantom, phantomFixtures } from '@synthetixio/synpress/playwright';
import basicSetup from '../wallet-setup/basic.setup';

// Set up the test environment with Synpress and Phantom fixtures, using the basic setup configuration
const test = testWithSynpress(phantomFixtures(basicSetup));

const { expect } = test;

test.only('should open Summer.fi homepage with Phantom already installed in test browser', async ({
	context,
	page,
	phantomPage,
	extensionId,
}) => {
	// Create a new Phantom instance with the provided context, page, password, and extension ID
	const phantom = new Phantom(context, phantomPage, basicSetup.walletPassword, extensionId);

	// Navigate to the root page
	await page.goto('/earn');

	// Pauses the test so that you can interact manually with Summer.fi website
	// and verify that Phantom browser extension and wallet are installed in test browser
	// when clicking on 'Log in > Continue with a wallet'
	await page.pause();
});
