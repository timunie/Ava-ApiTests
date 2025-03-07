# TryGetGlyphTypeface Method


Try to get a glyph typeface for given parameters.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool TryGetGlyphTypeface(
	string familyName,
	FontStyle style,
	FontWeight weight,
	FontStretch stretch,
	out IGlyphTypeface?? glyphTypeface
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function TryGetGlyphTypeface ( 
	familyName As String,
	style As FontStyle,
	weight As FontWeight,
	stretch As FontStretch,
	<OutAttribute> ByRef glyphTypeface As IGlyphTypeface
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryGetGlyphTypeface : 
        familyName : string * 
        style : FontStyle * 
        weight : FontWeight * 
        stretch : FontStretch * 
        glyphTypeface : IGlyphTypeface byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Fonts/IFontCollection.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The family name.</dd><dt>  <a href="T_Avalonia_Media_FontStyle">FontStyle</a></dt><dd>The font style.</dd><dt>  <a href="T_Avalonia_Media_FontWeight">FontWeight</a></dt><dd>The font weight.</dd><dt>  <a href="T_Avalonia_Media_FontStretch">FontStretch</a></dt><dd>The font stretch.</dd><dt>  <a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface</a></dt><dd>The glyph typeface.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
Returns `true` if a glyph typface can be found; otherwise, `false`

## See Also


#### Reference
<a href="T_Avalonia_Media_Fonts_IFontCollection">IFontCollection Interface</a>  
<a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts Namespace</a>  
