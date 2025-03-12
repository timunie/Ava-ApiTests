# ReadAt Method


Reads the <a href="T_Avalonia_Media_TextFormatting_Unicode_Codepoint">Codepoint</a> at specified position.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting_Unicode">Avalonia.Media.TextFormatting.Unicode</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Codepoint ReadAt(
	ReadOnlySpan<char> text,
	int index,
	out int count
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function ReadAt ( 
	text As ReadOnlySpan(Of Char),
	index As Integer,
	<OutAttribute> ByRef count As Integer
) As Codepoint
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member ReadAt : 
        text : ReadOnlySpan<char> * 
        index : int * 
        count : int byref -> Codepoint 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/Unicode/Codepoint.cs#L181" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.readonlyspan-1" target="_blank" rel="noopener noreferrer">ReadOnlySpan</a>(<a href="https://learn.microsoft.com/dotnet/api/system.char" target="_blank" rel="noopener noreferrer">Char</a>)</dt><dd>The buffer to read from.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index to read at.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The count of character that were read.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_TextFormatting_Unicode_Codepoint">Codepoint</a>  


## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_Unicode_Codepoint">Codepoint Structure</a>  
<a href="N_Avalonia_Media_TextFormatting_Unicode">Avalonia.Media.TextFormatting.Unicode Namespace</a>  

