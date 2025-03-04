import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# AppBuilder Methods




## Methods
<table>
<tr>
<td><a href="M_Avalonia_AppBuilder_AfterApplicationSetup">AfterApplicationSetup(Action(AppBuilder))</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_AfterPlatformServicesSetup">AfterPlatformServicesSetup(Action(AppBuilder))</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_AfterSetup">AfterSetup(Action(AppBuilder))</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_Configure__1">Configure(TApp)()</a></td>
<td>Begin configuring an <a href="T_Avalonia_Application">Application</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_Configure__1_1">Configure(TApp)(Func(TApp))</a></td>
<td>Begin configuring an <a href="T_Avalonia_Application">Application</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_ConfigureFonts">ConfigureFonts(Action(FontManager))</a></td>
<td>Registers an action that is executed with the current font manager.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_SetupWithLifetime">SetupWithLifetime(IApplicationLifetime)</a></td>
<td>Sets up the platform-specific services for the application and initialized it with a particular lifetime, but does not run it.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_SetupWithoutStarting">SetupWithoutStarting()</a></td>
<td>Sets up the platform-specific services for the application, but does not run it.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_Start">Start(AppBuilder.AppMainDelegate, String[])</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_UseRenderingSubsystem">UseRenderingSubsystem(Action, String)</a></td>
<td>Specifies a rendering subsystem to use.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_UseRuntimePlatformSubsystem">UseRuntimePlatformSubsystem(Action, String)</a></td>
<td>Specifies a runtime platform subsystem to use.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_UseStandardRuntimePlatformSubsystem">UseStandardRuntimePlatformSubsystem()</a></td>
<td>Specifies a standard runtime platform subsystem to use.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_UseWindowingSubsystem">UseWindowingSubsystem(Action, String)</a></td>
<td>Specifies a windowing subsystem to use.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_With__1">With(T)(Func(T))</a></td>
<td>Configures platform-specific options</td>
</tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_With__1_1">With(T)(T)</a></td>
<td>Configures platform-specific options</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_LoggingExtensions_LogToTrace">LogToTrace(LogEventLevel, String[])</a></td>
<td>Logs Avalonia events to the <a href="https://learn.microsoft.com/dotnet/api/system.diagnostics.trace" target="_blank" rel="noopener noreferrer">Trace</a> sink.<br />(Defined by <a href="T_Avalonia_LoggingExtensions">LoggingExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions_SetupWithClassicDesktopLifetime">SetupWithClassicDesktopLifetime(String[], Action(IClassicDesktopStyleApplicationLifetime))</a></td>
<td>Setups the Application with a IClassicDesktopStyleApplicationLifetime, but doesn't show the main window and doesn't run application main loop.<br />(Defined by <a href="T_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions">ClassicDesktopStyleApplicationLifetimeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions_StartWithClassicDesktopLifetime_1">StartWithClassicDesktopLifetime(String[], Action(IClassicDesktopStyleApplicationLifetime))</a></td>
<td>Starts the Application with a IClassicDesktopStyleApplicationLifetime, shows main window and runs application main loop.<br />(Defined by <a href="T_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions">ClassicDesktopStyleApplicationLifetimeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions_StartWithClassicDesktopLifetime">StartWithClassicDesktopLifetime(String[], ShutdownMode)</a></td>
<td>Starts the Application with a IClassicDesktopStyleApplicationLifetime, shows main window and runs application main loop.<br />(Defined by <a href="T_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions">ClassicDesktopStyleApplicationLifetimeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_SystemFontAppBuilderExtension_WithSystemFontSource">WithSystemFontSource(Uri)</a></td>
<td><br />(Defined by <a href="T_Avalonia_SystemFontAppBuilderExtension">SystemFontAppBuilderExtension</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_AppBuilder">AppBuilder Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
