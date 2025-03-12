# MaxTextWidth Property


The MaxTextWidth property defines the alignment edges for the FormattedText. For example, left aligned text is wrapped such that the leftmost glyph alignment point on each line falls exactly on the left edge of the rectangle. Note that for many fonts, especially in italic style, some glyph strokes may extend beyond the edges of the alignment rectangle. For this reason, it is recommended that clients draw text with at least 1/6 em (i.e of the font size) unused margin space either side. Zero value of MaxTextWidth is equivalent to the maximum possible paragraph width.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public double MaxTextWidth { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property MaxTextWidth As Double
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member MaxTextWidth : float with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/FormattedText.cs#L1098" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>

## See Also


#### Reference
<a href="T_Avalonia_Media_FormattedText">FormattedText Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

