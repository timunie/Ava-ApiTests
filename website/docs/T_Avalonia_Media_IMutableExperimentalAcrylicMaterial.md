# IMutableExperimentalAcrylicMaterial Interface


Represents a mutable brush which can return an immutable clone of itself.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
public interface IMutableExperimentalAcrylicMaterial : IExperimentalAcrylicMaterial
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
Public Interface IMutableExperimentalAcrylicMaterial
	Inherits IExperimentalAcrylicMaterial
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
type IMutableExperimentalAcrylicMaterial = 
    interface
        interface IExperimentalAcrylicMaterial
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/IMutableExperimentalAcrylicMaterial.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Media_IExperimentalAcrylicMaterial">IExperimentalAcrylicMaterial</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_IExperimentalAcrylicMaterial_BackgroundSource">BackgroundSource</a></td>
<td>Gets the <a href="T_Avalonia_Media_AcrylicBackgroundSource">AcrylicBackgroundSource</a> of the material.<br />(Inherited from <a href="T_Avalonia_Media_IExperimentalAcrylicMaterial">IExperimentalAcrylicMaterial</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IExperimentalAcrylicMaterial_FallbackColor">FallbackColor</a></td>
<td>Gets the fallback color.<br />(Inherited from <a href="T_Avalonia_Media_IExperimentalAcrylicMaterial">IExperimentalAcrylicMaterial</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IExperimentalAcrylicMaterial_MaterialColor">MaterialColor</a></td>
<td>Gets the effective material color.<br />(Inherited from <a href="T_Avalonia_Media_IExperimentalAcrylicMaterial">IExperimentalAcrylicMaterial</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IExperimentalAcrylicMaterial_TintColor">TintColor</a></td>
<td>Gets the TintColor of the material.<br />(Inherited from <a href="T_Avalonia_Media_IExperimentalAcrylicMaterial">IExperimentalAcrylicMaterial</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IExperimentalAcrylicMaterial_TintOpacity">TintOpacity</a></td>
<td>Gets the TintOpacity of the material.<br />(Inherited from <a href="T_Avalonia_Media_IExperimentalAcrylicMaterial">IExperimentalAcrylicMaterial</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_IMutableExperimentalAcrylicMaterial_ToImmutable">ToImmutable()</a></td>
<td>Creates an immutable clone of the brush.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_MaterialExtensions_ToImmutable">ToImmutable()</a></td>
<td>Converts a brush to an immutable brush.<br />(Defined by <a href="T_Avalonia_Media_MaterialExtensions">MaterialExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

