
import { z } from "zod"
import type { AppType } from 'next/app';
import { trpc } from '../utils/trcp';
const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default trpc.withTRPC(MyApp);
