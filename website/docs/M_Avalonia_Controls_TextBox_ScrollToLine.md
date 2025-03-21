# ScrollToLine Method


Scroll the <a href="T_Avalonia_Controls_TextBox">TextBox</a> to the specified line index.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/TextBox.cs#L2089" title="View the source code">View Source</a>



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

