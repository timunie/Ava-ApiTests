# IImmutableSolidColorBrush Interface


Fills an area with a solid color.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IImmutableSolidColorBrush : ISolidColorBrush, 
	IBrush, IImmutableBrush
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IImmutableSolidColorBrush
	Inherits ISolidColorBrush, IBrush, IImmutableBrush
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IImmutableSolidColorBrush = 
    interface
        interface ISolidColorBrush
        interface IBrush
        interface IImmutableBrush
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Media_IBrush">IBrush</a>, <a href="T_Avalonia_Media_IImmutableBrush">IImmutableBrush</a>, <a href="T_Avalonia_Media_ISolidColorBrush">ISolidColorBrush</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_ISolidColorBrush_Color">Color</a></td>
<td>Gets the color of the brush.<br />(Inherited from <a href="T_Avalonia_Media_ISolidColorBrush">ISolidColorBrush</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IBrush_Opacity">Opacity</a></td>
<td>Gets the opacity of the brush.<br />(Inherited from <a href="T_Avalonia_Media_IBrush">IBrush</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IBrush_Transform">Transform</a></td>
<td>Gets the transform of the brush.<br />(Inherited from <a href="T_Avalonia_Media_IBrush">IBrush</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IBrush_TransformOrigin">TransformOrigin</a></td>
<td>Gets the origin of the brushes <a href="P_Avalonia_Media_IBrush_Transform">Transform</a><br />(Inherited from <a href="T_Avalonia_Media_IBrush">IBrush</a>)</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_BrushExtensions_ToImmutable">ToImmutable()</a></td>
<td>Converts a brush to an immutable brush.<br />(Defined by <a href="T_Avalonia_Media_BrushExtensions">BrushExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
