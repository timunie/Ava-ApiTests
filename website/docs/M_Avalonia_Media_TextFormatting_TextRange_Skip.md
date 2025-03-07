# Skip Method


Bypasses a specified number of elements in the slice and then returns the remaining elements.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public TextRange Skip(
	int length
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Skip ( 
	length As Integer
) As TextRange
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Skip : 
        length : int -> TextRange 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextRange.cs#L61" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The number of elements to skip before returning the remaining elements.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_TextFormatting_TextRange">TextRange</a>  
A <a href="T_Avalonia_Media_TextFormatting_TextRange">TextRange</a> that contains the elements that occur after the specified index in this slice.

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_TextRange">TextRange Structure</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
