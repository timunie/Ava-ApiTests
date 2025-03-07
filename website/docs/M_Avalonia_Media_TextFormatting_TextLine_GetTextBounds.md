# GetTextBounds Method


Get an array of bounding rectangles of a range of characters within a text line.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract IReadOnlyList<TextBounds> GetTextBounds(
	int firstTextSourceCharacterIndex,
	int textLength
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustOverride Function GetTextBounds ( 
	firstTextSourceCharacterIndex As Integer,
	textLength As Integer
) As IReadOnlyList(Of TextBounds)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetTextBounds : 
        firstTextSourceCharacterIndex : int * 
        textLength : int -> IReadOnlyList<TextBounds> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextLine.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>index of first character of specified range</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>number of characters of the specified range</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Media_TextFormatting_TextBounds">TextBounds</a>)  
an array of bounding rectangles.

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_TextLine">TextLine Class</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
