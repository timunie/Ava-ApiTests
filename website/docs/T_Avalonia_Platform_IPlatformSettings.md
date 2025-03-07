# IPlatformSettings Interface


The IPlatformSettings interface represents a contract for accessing platform-specific settings and information. Some of these settings might be changed by used globally in the OS in runtime.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IPlatformSettings
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IPlatformSettings
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IPlatformSettings = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IPlatformSettings.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_IPlatformSettings_HoldWaitDuration">HoldWaitDuration</a></td>
<td>Holding duration between pointer press and when event is fired.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IPlatformSettings_HotkeyConfiguration">HotkeyConfiguration</a></td>
<td>Get a configuration for platform-specific hotkeys in an Avalonia application.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformSettings_GetColorValues">GetColorValues()</a></td>
<td>Gets current system color values including dark mode and accent colors.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformSettings_GetDoubleTapSize">GetDoubleTapSize(PointerType)</a></td>
<td>The size of the rectangle around the location of a pointer down that a pointer up must occur within in order to register a double-tap gesture, in device-independent pixels.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformSettings_GetDoubleTapTime">GetDoubleTapTime(PointerType)</a></td>
<td>Gets the maximum time that may occur between the first and second click of a double- tap gesture.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformSettings_GetTapSize">GetTapSize(PointerType)</a></td>
<td>The size of the rectangle around the location of a pointer down that a pointer up must occur within in order to register a tap gesture, in device-independent pixels.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Platform_IPlatformSettings_ColorValuesChanged">ColorValuesChanged</a></td>
<td>Raises when current system color values are changed. Including changing of a dark mode and accent colors.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
