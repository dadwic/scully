import { registerPlugin, getMyConfig, HandledRoute } from '@scullyio/scully';

export const LogRocket = 'logrocket';

const logrocketPlugin = async (
  html: string,
  route: HandledRoute
): Promise<string> => {
  const logrocketConfig = getMyConfig('logrocket');

  // herodevs/scully
  const logrocketScript = `
    <script src="https://cdn.logrocket.io/LogRocket.min.js"></script>
    <script>window.LogRocket && window.LogRocket.init('${logrocketConfig['app']}/${logrocketConfig['id']}');</script>`;

  // const logrocketScript = `;
  //   <script src="https://cdn.logrocket.io/LogRocket.min.js"></script>
  //   <script>window.LogRocket && window.LogRocket.init('qcmhsz/scully-docs-personal');</script>`;

  return html.replace(/<\/head/i, `${logrocketScript}</head`);
};

const validator = async () => [];

registerPlugin('render', LogRocket, logrocketPlugin, validator);
