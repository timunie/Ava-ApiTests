# IDispatcher Interface


Dispatches jobs to a thread.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IDispatcher
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IDispatcher
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IDispatcher = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/IDispatcher.cs" title="View the source code">View Source</a>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Threading_IDispatcher_CheckAccess">CheckAccess()</a></td>
<td>Determines whether the calling thread is the thread associated with this IDispatcher.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_IDispatcher_Post">Post(Action, DispatcherPriority)</a></td>
<td>Posts an action that will be invoked on the dispatcher thread.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_IDispatcher_VerifyAccess">VerifyAccess()</a></td>
<td>Throws an exception if the calling thread is not the thread associated with this IDispatcher.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

