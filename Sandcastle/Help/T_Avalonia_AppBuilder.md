---
title:AppBuilder Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# AppBuilder Class




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public sealed class AppBuilder
```
**VB**
``` VB
Public NotInheritable Class AppBuilder
```
**F#**
``` F#
[<SealedAttribute>]
type AppBuilder = class end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AppBuilder</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_AppBuilder_AfterPlatformServicesSetupCallback">AfterPlatformServicesSetupCallback</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_AfterSetupCallback">AfterSetupCallback</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_ApplicationType">ApplicationType</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_Instance">Instance</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_LifetimeOverride">LifetimeOverride</a></td>
<td><strong>Obsolete.</strong></td></tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_RenderingSubsystemInitializer">RenderingSubsystemInitializer</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_RenderingSubsystemName">RenderingSubsystemName</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_RuntimePlatformServicesInitializer">RuntimePlatformServicesInitializer</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_RuntimePlatformServicesName">RuntimePlatformServicesName</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_WindowingSubsystemInitializer">WindowingSubsystemInitializer</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AppBuilder_WindowingSubsystemName">WindowingSubsystemName</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_AppBuilder_AfterApplicationSetup">AfterApplicationSetup(Action(AppBuilder))</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_AfterPlatformServicesSetup">AfterPlatformServicesSetup(Action(AppBuilder))</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_AfterSetup">AfterSetup(Action(AppBuilder))</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_Configure__1">Configure(TApp)()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_Configure__1_1">Configure(TApp)(Func(TApp))</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_ConfigureFonts">ConfigureFonts(Action(FontManager))</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_SetupWithLifetime">SetupWithLifetime(IApplicationLifetime)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_SetupWithoutStarting">SetupWithoutStarting()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_Start">Start(AppBuilder.AppMainDelegate, String[])</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_UseRenderingSubsystem">UseRenderingSubsystem(Action, String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_UseRuntimePlatformSubsystem">UseRuntimePlatformSubsystem(Action, String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_UseStandardRuntimePlatformSubsystem">UseStandardRuntimePlatformSubsystem()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_UseWindowingSubsystem">UseWindowingSubsystem(Action, String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_With__1">With(T)(Func(T))</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AppBuilder_With__1_1">With(T)(T)</a></td>
<td> </td></tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_LoggingExtensions_LogToTrace">LogToTrace(LogEventLevel, String[])</a></td>
<td><br />(Defined by <a href="T_Avalonia_LoggingExtensions">LoggingExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions_SetupWithClassicDesktopLifetime">SetupWithClassicDesktopLifetime(String[], Action(IClassicDesktopStyleApplicationLifetime))</a></td>
<td><br />(Defined by <a href="T_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions">ClassicDesktopStyleApplicationLifetimeExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions_StartWithClassicDesktopLifetime_1">StartWithClassicDesktopLifetime(String[], Action(IClassicDesktopStyleApplicationLifetime))</a></td>
<td><br />(Defined by <a href="T_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions">ClassicDesktopStyleApplicationLifetimeExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions_StartWithClassicDesktopLifetime">StartWithClassicDesktopLifetime(String[], ShutdownMode)</a></td>
<td><br />(Defined by <a href="T_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions">ClassicDesktopStyleApplicationLifetimeExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Dialogs_ManagedFileDialogExtensions_UseManagedSystemDialogs">UseManagedSystemDialogs()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Dialogs_ManagedFileDialogExtensions">ManagedFileDialogExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Dialogs_ManagedFileDialogExtensions_UseManagedSystemDialogs__1">UseManagedSystemDialogs(TWindow)()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Dialogs_ManagedFileDialogExtensions">ManagedFileDialogExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_SystemFontAppBuilderExtension_WithSystemFontSource">WithSystemFontSource(Uri)</a></td>
<td><br />(Defined by <a href="T_Avalonia_SystemFontAppBuilderExtension">SystemFontAppBuilderExtension</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
