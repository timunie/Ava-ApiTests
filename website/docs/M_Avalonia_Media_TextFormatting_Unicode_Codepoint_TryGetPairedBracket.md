# TryGetPairedBracket Method


Gets the codepoint representing the bracket pairing for this instance.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting_Unicode">Avalonia.Media.TextFormatting.Unicode</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool TryGetPairedBracket(
	out Codepoint codepoint
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryGetPairedBracket ( 
	<OutAttribute> ByRef codepoint As Codepoint
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TryGetPairedBracket : 
        codepoint : Codepoint byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/Unicode/Codepoint.cs#L143" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_TextFormatting_Unicode_Codepoint">Codepoint</a></dt><dd>When this method returns, contains the codepoint representing the bracket pairing for this instance; otherwise, the default value for the type of the <em>codepoint</em> parameter. This parameter is passed uninitialized. .</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true if this instance has a bracket pairing; otherwise, false

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_Unicode_Codepoint">Codepoint Structure</a>  
<a href="N_Avalonia_Media_TextFormatting_Unicode">Avalonia.Media.TextFormatting.Unicode Namespace</a>  

