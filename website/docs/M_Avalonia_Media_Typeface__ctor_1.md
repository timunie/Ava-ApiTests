# Typeface(String, FontStyle, FontWeight, FontStretch) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_Typeface">Typeface</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Typeface(
	string fontFamilyName,
	FontStyle style = FontStyle.Normal,
	FontWeight weight = FontWeight.Normal,
	FontStretch stretch = FontStretch.Normal
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	fontFamilyName As String,
	Optional style As FontStyle = FontStyle.Normal,
	Optional weight As FontWeight = FontWeight.Normal,
	Optional stretch As FontStretch = FontStretch.Normal
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        fontFamilyName : string * 
        ?style : FontStyle * 
        ?weight : FontWeight * 
        ?stretch : FontStretch 
(* Defaults:
        let _style = defaultArg style FontStyle.Normal
        let _weight = defaultArg weight FontWeight.Normal
        let _stretch = defaultArg stretch FontStretch.Normal
*)
-> Typeface
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Typeface.cs#L51" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The name of the font family.</dd><dt>  <a href="T_Avalonia_Media_FontStyle">FontStyle</a>  (Optional)</dt><dd>The font style.</dd><dt>  <a href="T_Avalonia_Media_FontWeight">FontWeight</a>  (Optional)</dt><dd>The font weight.</dd><dt>  <a href="T_Avalonia_Media_FontStretch">FontStretch</a>  (Optional)</dt><dd>The font stretch.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_Typeface">Typeface Structure</a>  
<a href="Overload_Avalonia_Media_Typeface__ctor">Typeface Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

