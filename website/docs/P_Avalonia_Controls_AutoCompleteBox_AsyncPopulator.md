# AsyncPopulator Property




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Func<string?, CancellationToken, Task<IEnumerable<Object>>>? AsyncPopulator \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property AsyncPopulator As Func(Of String, CancellationToken, Task(Of IEnumerable(Of Object)))
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member AsyncPopulator : Func<string, CancellationToken, Task<IEnumerable<Object>>> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/AutoCompleteBox/AutoCompleteBox.Properties.cs#L472" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.func-3" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>, <a href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">CancellationToken</a>, <a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)))

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
