import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# GetTextRun Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public TextRun? GetTextRun(
	int textSourceIndex
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetTextRun ( 
	textSourceIndex As Integer
) As TextRun
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetTextRun : 
        textSourceIndex : int -> TextRun 
override GetTextRun : 
        textSourceIndex : int -> TextRun 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/TextBlock.cs#L903" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd></dl>

#### Return Value
TextRun

#### Implements
ITextSource.GetTextRun(Int32)  


## See Also


#### Reference
<a href="T_Avalonia_Controls_TextBlock_SimpleTextSource">TextBlock.SimpleTextSource Structure</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
