# TryMatchCharacter Method




## Definition
**Namespace:** <a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool TryMatchCharacter(
	int codepoint,
	FontStyle style,
	FontWeight weight,
	FontStretch stretch,
	string? familyName,
	CultureInfo? culture,
	out Typeface? match
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryMatchCharacter ( 
	codepoint As Integer,
	style As FontStyle,
	weight As FontWeight,
	stretch As FontStretch,
	familyName As String,
	culture As CultureInfo,
	<OutAttribute> ByRef match As Typeface
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryMatchCharacter : 
        codepoint : int * 
        style : FontStyle * 
        weight : FontWeight * 
        stretch : FontStretch * 
        familyName : string * 
        culture : CultureInfo * 
        match : Typeface byref -> bool 
override TryMatchCharacter : 
        codepoint : int * 
        style : FontStyle * 
        weight : FontWeight * 
        stretch : FontStretch * 
        familyName : string * 
        culture : CultureInfo * 
        match : Typeface byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Fonts/FontCollectionBase.cs#L27" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_FontStyle">FontStyle</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_FontWeight">FontWeight</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_FontStretch">FontStretch</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_Typeface">Typeface</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

#### Implements
<a href="M_Avalonia_Media_Fonts_IFontCollection_TryMatchCharacter">IFontCollection.TryMatchCharacter(Int32, FontStyle, FontWeight, FontStretch, String, CultureInfo, Typeface)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Media_Fonts_FontCollectionBase">FontCollectionBase Class</a>  
<a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts Namespace</a>  
