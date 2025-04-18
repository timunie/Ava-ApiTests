# AppBuilder Class


Initializes platform-specific services for an <a href="T_Avalonia_Application">Application</a>.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class AppBuilder
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class AppBuilder
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type AppBuilder = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/AppBuilder.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AppBuilder</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_AppBuilder_AfterPlatformServicesSetupCallback">AfterPlatformServicesSetupCallback</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_AfterSetupCallback">AfterSetupCallback</a></td>
<td>Gets a method to call after the <a href="T_Avalonia_Application">Application</a> is setup.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_ApplicationType">ApplicationType</a></td>
<td>Gets the type of the Instance (even if it's not created yet)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_Instance">Instance</a></td>
<td>Gets the <a href="T_Avalonia_Application">Application</a> instance being initialized.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_LifetimeOverride">LifetimeOverride</a></td>
<td>Gets a method to override a lifetime factory.<br /><Tag type="is-danger">Obsolete.</Tag></td>
</tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_RenderingSubsystemInitializer">RenderingSubsystemInitializer</a></td>
<td>Gets or sets a method to call the initialize the windowing subsystem.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_RenderingSubsystemName">RenderingSubsystemName</a></td>
<td>Gets the name of the currently selected rendering subsystem.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_RuntimePlatformServicesInitializer">RuntimePlatformServicesInitializer</a></td>
<td>Gets or sets a method to call the initialize the runtime platform services (e. g. AssetLoader)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_RuntimePlatformServicesName">RuntimePlatformServicesName</a></td>
<td>Gets the name of the currently selected windowing subsystem.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_WindowingSubsystemInitializer">WindowingSubsystemInitializer</a></td>
<td>Gets or sets a method to call the initialize the windowing subsystem.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_WindowingSubsystemName">WindowingSubsystemName</a></td>
<td>Gets the name of the currently selected windowing subsystem.</td>
</tr>
</table>

## Methods
<table>
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
<td><a href="M_Avalonia_Browser_BrowserAppBuilder_SetupBrowserAppAsync">SetupBrowserAppAsync(BrowserPlatformOptions)</a></td>
<td>Loads avalonia javascript modules and configures browser backend.<br />(Defined by <a href="T_Avalonia_Browser_BrowserAppBuilder">BrowserAppBuilder</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions_SetupWithClassicDesktopLifetime">SetupWithClassicDesktopLifetime(String[], Action(IClassicDesktopStyleApplicationLifetime))</a></td>
<td>Setups the Application with a IClassicDesktopStyleApplicationLifetime, but doesn't show the main window and doesn't run application main loop.<br />(Defined by <a href="T_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions">ClassicDesktopStyleApplicationLifetimeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Browser_Blazor_BlazorAppBuilder_StartBlazorAppAsync">StartBlazorAppAsync(BrowserPlatformOptions)</a></td>
<td>Configures blazor backend, loads avalonia javascript modules and creates a single view lifetime.<br />(Defined by <a href="T_Avalonia_Browser_Blazor_BlazorAppBuilder">BlazorAppBuilder</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Browser_BrowserAppBuilder_StartBrowserAppAsync">StartBrowserAppAsync(String, BrowserPlatformOptions)</a></td>
<td>Configures browser backend, loads avalonia javascript modules and creates a single view lifetime from the passed  parameter.<br />(Defined by <a href="T_Avalonia_Browser_BrowserAppBuilder">BrowserAppBuilder</a>)</td>
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
<td><a href="M_Avalonia_AndroidApplicationExtensions_UseAndroid">UseAndroid()</a></td>
<td><br />(Defined by <a href="T_Avalonia_AndroidApplicationExtensions">AndroidApplicationExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaNativePlatformExtensions_UseAvaloniaNative">UseAvaloniaNative()</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaNativePlatformExtensions">AvaloniaNativePlatformExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Browser_BrowserAppBuilder_UseBrowser">UseBrowser()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Browser_BrowserAppBuilder">BrowserAppBuilder</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Direct2DApplicationExtensions_UseDirect2D1">UseDirect2D1()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Direct2DApplicationExtensions">Direct2DApplicationExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_IOSApplicationExtensions_UseiOS_1">UseiOS()</a></td>
<td><br />(Defined by <a href="T_Avalonia_IOSApplicationExtensions">IOSApplicationExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_IOSApplicationExtensions_UseiOS">UseiOS(IAvaloniaAppDelegate)</a></td>
<td><br />(Defined by <a href="T_Avalonia_IOSApplicationExtensions">IOSApplicationExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Dialogs_ManagedFileDialogExtensions_UseManagedSystemDialogs">UseManagedSystemDialogs()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Dialogs_ManagedFileDialogExtensions">ManagedFileDialogExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Dialogs_ManagedFileDialogExtensions_UseManagedSystemDialogs__1">UseManagedSystemDialogs(TWindow)()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Dialogs_ManagedFileDialogExtensions">ManagedFileDialogExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AppBuilderDesktopExtensions_UsePlatformDetect">UsePlatformDetect()</a></td>
<td><br />(Defined by <a href="T_Avalonia_AppBuilderDesktopExtensions">AppBuilderDesktopExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AppBuilderExtensions_UseReactiveUI">UseReactiveUI()</a></td>
<td>Initializes ReactiveUI framework to use with Avalonia. Registers Avalonia scheduler, an activation for view fetcher, a template binding hook. Remember to call this method if you are using ReactiveUI in your application.<br />(Defined by <a href="T_Avalonia_ReactiveUI_AppBuilderExtensions">AppBuilderExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_SkiaApplicationExtensions_UseSkia">UseSkia()</a></td>
<td>Enable Skia renderer.<br />(Defined by <a href="T_Avalonia_SkiaApplicationExtensions">SkiaApplicationExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Win32ApplicationExtensions_UseWin32">UseWin32()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Win32ApplicationExtensions">Win32ApplicationExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaX11PlatformExtensions_UseX11">UseX11()</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaX11PlatformExtensions">AvaloniaX11PlatformExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AppBuilderExtension_WithInterFont">WithInterFont()</a></td>
<td><br />(Defined by <a href="T_Avalonia_AppBuilderExtension">AppBuilderExtension</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_SystemFontAppBuilderExtension_WithSystemFontSource">WithSystemFontSource(Uri)</a></td>
<td><br />(Defined by <a href="T_Avalonia_SystemFontAppBuilderExtension">SystemFontAppBuilderExtension</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  

