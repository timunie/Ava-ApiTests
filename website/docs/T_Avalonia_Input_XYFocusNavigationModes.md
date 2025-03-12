# XYFocusNavigationModes Enumeration


Specifies the 2D directional navigation behavior when using different key devices.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[FlagsAttribute]
public enum XYFocusNavigationModes
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<FlagsAttribute>
Public Enumeration XYFocusNavigationModes
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<FlagsAttribute>]
type XYFocusNavigationModes
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Navigation/XYFocusNavigationModes.cs" title="View the source code">View Source</a>

See <a href="T_Avalonia_Input_KeyDeviceType">KeyDeviceType</a>.

## Members
<table>
<tr>
<td>Disabled</td>
<td>0</td>
<td>Any key device XY navigation is disabled.</td>
</tr>
<tr>
<td>Keyboard</td>
<td>1</td>
<td>Keyboard arrow keys can be used for 2D directional navigation.</td>
</tr>
<tr>
<td>Gamepad</td>
<td>2</td>
<td>Gamepad controller DPad keys can be used for 2D directional navigation.</td>
</tr>
<tr>
<td>Remote</td>
<td>4</td>
<td>Remote controller DPad keys can be used for 2D directional navigation.</td>
</tr>
<tr>
<td>Enabled</td>
<td>7</td>
<td>All key device XY navigation is disabled.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

