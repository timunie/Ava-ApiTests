# AvaloniaScheduler Class


A reactive scheduler that uses Avalonia's <a href="T_Avalonia_Threading_Dispatcher">Dispatcher</a>.



## Definition
**Namespace:** <a href="N_Avalonia_ReactiveUI">Avalonia.ReactiveUI</a>  
**Assembly:** Avalonia.ReactiveUI (in Avalonia.ReactiveUI.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class AvaloniaScheduler : LocalScheduler
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class AvaloniaScheduler
	Inherits LocalScheduler
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type AvaloniaScheduler = 
    class
        inherit LocalScheduler
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.ReactiveUI/AvaloniaScheduler.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.reactive.concurrency.localscheduler" target="_blank" rel="noopener noreferrer">LocalScheduler</a>  →  AvaloniaScheduler</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.reactive.concurrency.localscheduler.now" target="_blank" rel="noopener noreferrer">Now()</a></td>
<td>Gets the scheduler's notion of current time.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.reactive.concurrency.localscheduler" target="_blank" rel="noopener noreferrer">LocalScheduler</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.reactive.concurrency.localscheduler.getservice" target="_blank" rel="noopener noreferrer">GetService(Type)</a></td>
<td>Discovers scheduler services by interface type. The base class implementation returns requested services for each scheduler interface implemented by the derived class. For more control over service discovery, derived types can override this method.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.reactive.concurrency.localscheduler" target="_blank" rel="noopener noreferrer">LocalScheduler</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.reactive.concurrency.localscheduler.schedule" target="_blank" rel="noopener noreferrer">Schedule``1(UMP, Func(IScheduler, UMP, IDisposable))</a></td>
<td>Schedules an action to be executed.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.reactive.concurrency.localscheduler" target="_blank" rel="noopener noreferrer">LocalScheduler</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AvaloniaScheduler_Schedule__1">Schedule(TState)(TState, TimeSpan, Func(IScheduler, TState, IDisposable))</a></td>
<td>Schedules an action to be executed after dueTime.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.reactive.concurrency.localscheduler.schedule" target="_blank" rel="noopener noreferrer">LocalScheduler.Schedule``1(UMP, TimeSpan, Func(IScheduler, UMP, IDisposable))</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.reactive.concurrency.localscheduler.schedule" target="_blank" rel="noopener noreferrer">Schedule``1(UMP, DateTimeOffset, Func(IScheduler, UMP, IDisposable))</a></td>
<td>Schedules an action to be executed at dueTime.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.reactive.concurrency.localscheduler" target="_blank" rel="noopener noreferrer">LocalScheduler</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.reactive.concurrency.localscheduler.schedule" target="_blank" rel="noopener noreferrer">Schedule``1(UMP, TimeSpan, Func(IScheduler, UMP, IDisposable))</a></td>
<td>Schedules an action to be executed after dueTime.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.reactive.concurrency.localscheduler" target="_blank" rel="noopener noreferrer">LocalScheduler</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.reactive.concurrency.localscheduler.startstopwatch" target="_blank" rel="noopener noreferrer">StartStopwatch()</a></td>
<td>Starts a new stopwatch object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.reactive.concurrency.localscheduler" target="_blank" rel="noopener noreferrer">LocalScheduler</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_ReactiveUI_AvaloniaScheduler_Instance">Instance</a></td>
<td>The instance of the AvaloniaScheduler.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_ReactiveUI">Avalonia.ReactiveUI Namespace</a>  

