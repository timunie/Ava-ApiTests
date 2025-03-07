# CreateGlyphRun Method


Creates a platform implementation of a glyph run.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IGlyphRunImpl CreateGlyphRun(
	IGlyphTypeface glyphTypeface,
	double fontRenderingEmSize,
	IReadOnlyList<GlyphInfo> glyphInfos,
	Point baselineOrigin
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function CreateGlyphRun ( 
	glyphTypeface As IGlyphTypeface,
	fontRenderingEmSize As Double,
	glyphInfos As IReadOnlyList(Of GlyphInfo),
	baselineOrigin As Point
) As IGlyphRunImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateGlyphRun : 
        glyphTypeface : IGlyphTypeface * 
        fontRenderingEmSize : float * 
        glyphInfos : IReadOnlyList<GlyphInfo> * 
        baselineOrigin : Point -> IGlyphRunImpl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IPlatformRenderInterface.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface</a></dt><dd>The glyph typeface.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The font rendering em size.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Media_TextFormatting_GlyphInfo">GlyphInfo</a>)</dt><dd>The list of glyphs.</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The baseline origin of the run. Can be null.</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IGlyphRunImpl">IGlyphRunImpl</a>  
An <a href="T_Avalonia_Platform_IGlyphRunImpl">IGlyphRunImpl</a>.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
