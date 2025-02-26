import {buildProvidersTree} from "@/utils";
import {KeyboardProvider} from "react-native-keyboard-controller";
import {SafeAreaProvider} from "react-native-safe-area-context";
import TanStackProvider from "@/providers/tan-stack-provider";


const ProvidersTree = buildProvidersTree([[SafeAreaProvider], [KeyboardProvider], [TanStackProvider]])
