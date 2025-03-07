# CommitDeselect Method


If <a href="P_Avalonia_Controls_Selection_SelectionNodeBase_1_RangesEnabled">RangesEnabled</a>, removes the specified range from the selection.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected int CommitDeselect(
	int begin,
	int end
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Function CommitDeselect ( 
	begin As Integer,
	end As Integer
) As Integer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member CommitDeselect : 
        begin : int * 
        end : int -> int 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Selection/SelectionNodeBase.cs#L226" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The inclusive index of the start of the range to deselect.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The inclusive index of the end of the range to deselect.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  
The number of items selected.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Selection_SelectionNodeBase_1">SelectionNodeBase(T) Class</a>  
<a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection Namespace</a>  
