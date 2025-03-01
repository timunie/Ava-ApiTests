import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# WindowTransparencyLevel Structure




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct WindowTransparencyLevel : IEquatable<WindowTransparencyLevel>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure WindowTransparencyLevel
	Implements IEquatable(Of WindowTransparencyLevel)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type WindowTransparencyLevel = 
    struct
        inherit ValueType
        interface IEquatable<WindowTransparencyLevel>
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  WindowTransparencyLevel</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(WindowTransparencyLevel)</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_WindowTransparencyLevel_AcrylicBlur">AcrylicBlur</a></td>
<td>The window background is a blur-behind with a high blur radius. This level may fallback to Blur.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_WindowTransparencyLevel_Blur">Blur</a></td>
<td>The window background is a blur-behind where nothing is drawn in the window.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_WindowTransparencyLevel_Mica">Mica</a></td>
<td>The window background is based on desktop wallpaper tint with a blur. This will only work on Windows 11</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_WindowTransparencyLevel_None">None</a></td>
<td>The window background is Black where nothing is drawn in the window.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_WindowTransparencyLevel_Transparent">Transparent</a></td>
<td>The window background is Transparent where nothing is drawn in the window.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_WindowTransparencyLevel_ToString">ToString</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
