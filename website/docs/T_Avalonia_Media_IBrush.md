# IBrush Interface


Describes how an area is painted.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[TypeConverterAttribute(typeof(BrushConverter))]
public interface IBrush
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<TypeConverterAttribute(GetType(BrushConverter))>
Public Interface IBrush
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<TypeConverterAttribute(typeof(BrushConverter))>]
type IBrush = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/IBrush.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_IBrush_Opacity">Opacity</a></td>
<td>Gets the opacity of the brush.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IBrush_Transform">Transform</a></td>
<td>Gets the transform of the brush.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IBrush_TransformOrigin">TransformOrigin</a></td>
<td>Gets the origin of the brushes <a href="P_Avalonia_Media_IBrush_Transform">Transform</a></td>
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
