# ITileBrush Interface


A brush which displays a repeating image.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
public interface ITileBrush : IBrush
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
Public Interface ITileBrush
	Inherits IBrush
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
type ITileBrush = 
    interface
        interface IBrush
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/ITileBrush.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Media_IBrush">IBrush</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_ITileBrush_AlignmentX">AlignmentX</a></td>
<td>Gets the horizontal alignment of a tile in the destination.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_ITileBrush_AlignmentY">AlignmentY</a></td>
<td>Gets the horizontal alignment of a tile in the destination.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_ITileBrush_DestinationRect">DestinationRect</a></td>
<td>Gets the rectangle on the destination in which to paint a tile.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IBrush_Opacity">Opacity</a></td>
<td>Gets the opacity of the brush.<br />(Inherited from <a href="T_Avalonia_Media_IBrush">IBrush</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_ITileBrush_SourceRect">SourceRect</a></td>
<td>Gets the rectangle of the source image that will be displayed.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_ITileBrush_Stretch">Stretch</a></td>
<td>Gets a value indicating how the source rectangle will be stretched to fill the destination rect.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_ITileBrush_TileMode">TileMode</a></td>
<td>Gets the brush's tile mode.</td>
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

