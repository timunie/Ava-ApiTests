# RequestScreenDetails Method


Asks underlying platform to provide detailed screen information. On some platforms it might include non-primary screens, as well as display names.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Task<bool> RequestScreenDetails()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function RequestScreenDetails As Task(Of Boolean)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RequestScreenDetails : unit -> Task<bool> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Screens.cs#L184" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)  
True, if detailed screen information was provided. False, if denied by the platform or user.This method is async and might show a dialog to the user asking for a permission.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Screens">Screens Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

