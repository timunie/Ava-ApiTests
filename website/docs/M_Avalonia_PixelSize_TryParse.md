# TryParse Method


Try parsing *source* as <a href="T_Avalonia_PixelSize">PixelSize</a>.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool TryParse(
	string? source,
	out PixelSize? result
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function TryParse ( 
	source As String,
	<OutAttribute> ByRef result As PixelSize
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member TryParse : 
        source : string * 
        result : PixelSize byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelSize.cs#L90" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a> to parse.</dd><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd>The result of parsing. if <em>source</em> is not valid <em>result</em> is <a href="F_Avalonia_PixelSize_Empty">Empty</a></dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
`true` if *source* is valid <a href="T_Avalonia_PixelSize">PixelSize</a>, otherwise `false`.

## See Also


#### Reference
<a href="T_Avalonia_PixelSize">PixelSize Structure</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

