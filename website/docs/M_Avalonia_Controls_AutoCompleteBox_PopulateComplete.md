# PopulateComplete Method


Notifies the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a> that the Items property has been set and the data can be filtered to provide possible matches in the drop-down.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void PopulateComplete()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub PopulateComplete
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PopulateComplete : unit -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/AutoCompleteBox/AutoCompleteBox.cs#L1584" title="View the source code">View Source</a>



## Remarks
Call this method when you are providing custom population of the drop-down portion of the AutoCompleteBox, to signal the control that you are done with the population process. Typically, you use PopulateComplete when the population process is a long-running process and you want to cancel built-in filtering of the ItemsSource items. In this case, you can handle the Populated event and set PopulatingEventArgs.Cancel to true. When the long-running process has completed you call PopulateComplete to indicate the drop-down is populated.

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

