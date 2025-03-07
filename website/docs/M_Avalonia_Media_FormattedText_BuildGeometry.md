# BuildGeometry Method


Obtains geometry for the text, including underlines and strikethroughs.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Geometry? BuildGeometry(
	Point origin
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function BuildGeometry ( 
	origin As Point
) As Geometry
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member BuildGeometry : 
        origin : Point -> Geometry 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/FormattedText.cs#L1351" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The left top origin of the resulting geometry.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_Geometry">Geometry</a>  
The geometry returned contains the combined geometry of all of the glyphs, underlines and strikeThroughs that represent the formatted text. Overlapping contours are merged by performing a Boolean union operation.

## See Also


#### Reference
<a href="T_Avalonia_Media_FormattedText">FormattedText Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
