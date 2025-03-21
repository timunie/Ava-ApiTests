# CheckAccess Method


Determines whether the calling thread is the thread associated with this <a href="T_Avalonia_Threading_IDispatcher">IDispatcher</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool CheckAccess()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function CheckAccess As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CheckAccess : unit -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/IDispatcher.cs" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if he calling thread is the thread associated with the dispatched, otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_Threading_IDispatcher">IDispatcher Interface</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

