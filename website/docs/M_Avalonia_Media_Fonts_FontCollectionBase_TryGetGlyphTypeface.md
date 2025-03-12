# TryGetGlyphTypeface Method




## Definition
**Namespace:** <a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract bool TryGetGlyphTypeface(
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
Public MustOverride Function TryGetGlyphTypeface ( 
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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Fonts/FontCollectionBase.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_FontStyle">FontStyle</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_FontWeight">FontWeight</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_FontStretch">FontStretch</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

#### Implements
<a href="M_Avalonia_Media_Fonts_IFontCollection_TryGetGlyphTypeface">IFontCollection.TryGetGlyphTypeface(String, FontStyle, FontWeight, FontStretch, IGlyphTypeface)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Media_Fonts_FontCollectionBase">FontCollectionBase Class</a>  
<a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts Namespace</a>  

