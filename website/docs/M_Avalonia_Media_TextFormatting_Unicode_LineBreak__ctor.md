# LineBreak Constructor


Constructor



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting_Unicode">Avalonia.Media.TextFormatting.Unicode</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public LineBreak(
	int positionMeasure,
	int positionWrap,
	bool required = false
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	positionMeasure As Integer,
	positionWrap As Integer,
	Optional required As Boolean = false
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        positionMeasure : int * 
        positionWrap : int * 
        ?required : bool 
(* Defaults:
        let _required = defaultArg required false
*)
-> LineBreak
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/Unicode/LineBreak.cs#L37" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The code point index to measure to</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The code point index to actually break the line at</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>True if this is a required line break; otherwise false</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_Unicode_LineBreak">LineBreak Structure</a>  
<a href="N_Avalonia_Media_TextFormatting_Unicode">Avalonia.Media.TextFormatting.Unicode Namespace</a>  

