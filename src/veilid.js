import veilid_load_wasm, * as veilid from './wasm/veilid_wasm.js';
import {
  veilidCoreInitConfig,
  veilidCoreStartupConfig,
} from './veilid-config.js';

export async function initVeilid() {
  console.log('loading veilid wasm...');
  await veilid_load_wasm();
  veilid.initialize_veilid_wasm();
  // Set veilid as a global so commands can be run in the browser console for debugging.
  window.veilid = veilid;
  console.log('veilid wasm loaded!');
}

export async function startVeilid() {
  console.log('starting veilid core...');
  veilid.initialize_veilid_core(JSON.stringify(veilidCoreInitConfig));

  veilid.startup_veilid_core(async (update) => {
    const data = JSON.parse(update);

    if (data?.kind === 'Log') {
      switch (data?.log_level) {
        case 'Warn':
          console.warn(data.message);
          break;
        case 'Info':
          console.info(data.message);
          break;
        case 'Debug':
          console.debug(data.message);
          break;
        default:
          console.log(data.message);
          break;
      }
    } else {
      console.log(data);
    }

    if (
      data.kind === 'Log' &&
      data?.message?.includes('Veilid API startup complete')
    ) {
      console.log('veilid core started!');
      veilid.attach();
    }
  }, JSON.stringify(veilidCoreStartupConfig));

  return veilid;
}

export async function stopVeilid() {
  await veilid.shutdown_veilid_core();
}
