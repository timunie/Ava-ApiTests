# TextShaperOptions(IGlyphTypeface, IReadOnlyList&lt;FontFeature&gt;, Double, SByte, CultureInfo, Double, Double) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_TextFormatting_TextShaperOptions">TextShaperOptions</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public TextShaperOptions(
	IGlyphTypeface typeface,
	IReadOnlyList<FontFeature>? fontFeatures,
	double fontRenderingEmSize = 12,
	sbyte bidiLevel = 0,
	CultureInfo? culture = null,
	double incrementalTabWidth = 0,
	double letterSpacing = 0
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	typeface As IGlyphTypeface,
	fontFeatures As IReadOnlyList(Of FontFeature),
	Optional fontRenderingEmSize As Double = 12,
	Optional bidiLevel As SByte = 0,
	Optional culture As CultureInfo = Nothing,
	Optional incrementalTabWidth As Double = 0,
	Optional letterSpacing As Double = 0
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        typeface : IGlyphTypeface * 
        fontFeatures : IReadOnlyList<FontFeature> * 
        ?fontRenderingEmSize : float * 
        ?bidiLevel : sbyte * 
        ?culture : CultureInfo * 
        ?incrementalTabWidth : float * 
        ?letterSpacing : float 
(* Defaults:
        let _fontRenderingEmSize = defaultArg fontRenderingEmSize 12
        let _bidiLevel = defaultArg bidiLevel 0
        let _culture = defaultArg culture null
        let _incrementalTabWidth = defaultArg incrementalTabWidth 0
        let _letterSpacing = defaultArg letterSpacing 0
*)
-> TextShaperOptions
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextShaperOptions.cs#L33" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Media_FontFeature">FontFeature</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.sbyte" target="_blank" rel="noopener noreferrer">SByte</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_TextShaperOptions">TextShaperOptions Structure</a>  
<a href="Overload_Avalonia_Media_TextFormatting_TextShaperOptions__ctor">TextShaperOptions Overload</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  

