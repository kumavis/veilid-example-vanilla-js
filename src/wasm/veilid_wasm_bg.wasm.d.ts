/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function initialize_veilid_wasm(): void;
export function initialize_veilid_core(a: number, b: number): void;
export function change_log_level(a: number, b: number, c: number, d: number): void;
export function startup_veilid_core(a: number, b: number, c: number): number;
export function release_routing_context(a: number): number;
export function routing_context_with_privacy(a: number): number;
export function routing_context_with_custom_privacy(a: number, b: number, c: number): number;
export function routing_context_with_sequencing(a: number, b: number, c: number): number;
export function routing_context_app_call(a: number, b: number, c: number, d: number, e: number): number;
export function routing_context_app_message(a: number, b: number, c: number, d: number, e: number): number;
export function routing_context_create_dht_record(a: number, b: number, c: number, d: number): number;
export function routing_context_open_dht_record(a: number, b: number, c: number, d: number, e: number): number;
export function routing_context_close_dht_record(a: number, b: number, c: number): number;
export function routing_context_delete_dht_record(a: number, b: number, c: number): number;
export function routing_context_get_dht_value(a: number, b: number, c: number, d: number, e: number): number;
export function routing_context_set_dht_value(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function routing_context_watch_dht_values(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function routing_context_cancel_dht_watch(a: number, b: number, c: number, d: number, e: number): number;
export function new_custom_private_route(a: number, b: number, c: number, d: number): number;
export function import_remote_private_route(a: number, b: number): number;
export function release_private_route(a: number, b: number): number;
export function app_call_reply(a: number, b: number, c: number, d: number): number;
export function open_table_db(a: number, b: number, c: number): number;
export function release_table_db(a: number): number;
export function delete_table_db(a: number, b: number): number;
export function table_db_get_column_count(a: number): number;
export function table_db_transact(a: number): number;
export function release_table_db_transaction(a: number): number;
export function table_db_transaction_store(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function table_db_transaction_delete(a: number, b: number, c: number, d: number): number;
export function table_db_store(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function table_db_load(a: number, b: number, c: number, d: number): number;
export function table_db_delete(a: number, b: number, c: number, d: number): number;
export function valid_crypto_kinds(a: number): void;
export function verify_signatures(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function generate_signatures(a: number, b: number, c: number, d: number): number;
export function crypto_cached_dh(a: number, b: number, c: number, d: number, e: number): number;
export function crypto_compute_dh(a: number, b: number, c: number, d: number, e: number): number;
export function crypto_hash_password(a: number, b: number, c: number, d: number, e: number): number;
export function crypto_verify_password(a: number, b: number, c: number, d: number, e: number): number;
export function crypto_derive_shared_secret(a: number, b: number, c: number, d: number, e: number): number;
export function crypto_generate_hash(a: number, b: number, c: number): number;
export function crypto_validate_key_pair(a: number, b: number, c: number, d: number, e: number): number;
export function crypto_validate_hash(a: number, b: number, c: number, d: number, e: number): number;
export function crypto_distance(a: number, b: number, c: number, d: number, e: number): number;
export function crypto_sign(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function crypto_verify(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function crypto_decrypt_aead(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): number;
export function crypto_encrypt_aead(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): number;
export function crypto_crypt_no_auth(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function debug(a: number, b: number): number;
export function veilid_version_string(a: number): void;
export function veilid_version(): number;
export function table_db_transaction_rollback(a: number): number;
export function routing_context(): number;
export function now(): number;
export function best_crypto_kind(): number;
export function generate_key_pair(a: number): number;
export function crypto_default_salt_length(a: number): number;
export function crypto_random_nonce(a: number): number;
export function crypto_random_shared_secret(a: number): number;
export function crypto_generate_key_pair(a: number): number;
export function crypto_aead_overhead(a: number): number;
export function get_veilid_state(): number;
export function attach(): number;
export function detach(): number;
export function shutdown_veilid_core(): number;
export function new_private_route(): number;
export function crypto_random_bytes(a: number, b: number): number;
export function table_db_get_keys(a: number, b: number): number;
export function table_db_transaction_commit(a: number): number;
export function main_rs(): void;
export function __wbindgen_malloc(a: number, b: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number, d: number): number;
export const __wbindgen_export_2: WebAssembly.Table;
export function _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd5ca42179650b42a(a: number, b: number, c: number): void;
export function _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h347d2ef4da983038(a: number, b: number): void;
export function _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h29236cd68cc75281(a: number, b: number): void;
export function _dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hb20390528dcf9c1a(a: number, b: number, c: number): void;
export function _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha336d93d17bffe08(a: number, b: number, c: number): void;
export function _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hb56bdcf13d682626(a: number, b: number, c: number): void;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number, c: number): void;
export function __wbindgen_exn_store(a: number): void;
export function wasm_bindgen__convert__closures__invoke2_mut__hbc2b82607df1685e(a: number, b: number, c: number, d: number): void;
