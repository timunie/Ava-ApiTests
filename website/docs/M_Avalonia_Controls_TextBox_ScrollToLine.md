import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ScrollToLine Method


Scroll the <a href="T_Avalonia_Controls_TextBox">TextBox</a> to the specified line index.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void ScrollToLine(
	int lineIndex
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub ScrollToLine ( 
	lineIndex As Integer
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ScrollToLine : 
        lineIndex : int -> unit 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The line index to scroll to.</dd></dl>

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception" target="_blank" rel="noopener noreferrer">ArgumentOutOfRangeException</a></td>
<td><em>lineIndex</em> is less than zero. -or - <em>lineIndex</em> is larger than or equal to the line count.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_TextBox">TextBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
