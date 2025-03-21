# SetInhibitAppSleep Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Task SetInhibitAppSleep(
	bool inhibitAppSleep,
	string reason
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function SetInhibitAppSleep ( 
	inhibitAppSleep As Boolean,
	reason As String
) As Task
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract SetInhibitAppSleep : 
        inhibitAppSleep : bool * 
        reason : string -> Task 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IPlatformBehaviorInhibition.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformBehaviorInhibition">IPlatformBehaviorInhibition Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

