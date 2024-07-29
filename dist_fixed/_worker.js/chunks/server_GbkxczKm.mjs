globalThis.process ??= {}; globalThis.process.env ??= {};
import { u as getEnv, v as validateEnvVariable, w as getEnvFieldType, x as createInvalidVariablesError, y as setOnSetGetEnv } from './astro/env-setup_C7zdctQz.mjs';

const schema = {"FOO":{"context":"server","access":"secret","type":"string"}};

// @ts-check

const _internalGetSecret = (key) => {
	const rawVariable = getEnv(key);
	const variable = rawVariable === '' ? undefined : rawVariable;
	const options = schema[key];

	const result = validateEnvVariable(variable, options);
	if (result.ok) {
		return result.value;
	}
	const type = getEnvFieldType(options);
	throw createInvalidVariablesError(key, type, result);
};

setOnSetGetEnv((reset) => {
	FOO = reset ? undefined : _internalGetSecret("FOO");

});
let FOO = _internalGetSecret("FOO");

export { FOO as F };
