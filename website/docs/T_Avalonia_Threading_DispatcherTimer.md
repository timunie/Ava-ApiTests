# DispatcherTimer Class


A timer that is integrated into the Dispatcher queues, and will be processed after a given amount of time at a specified priority.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class DispatcherTimer
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class DispatcherTimer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type DispatcherTimer = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/DispatcherTimer.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  DispatcherTimer</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherTimer__ctor">DispatcherTimer()</a></td>
<td>Creates a timer that uses theUI thread's Dispatcher2 to process the timer event at background priority.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherTimer__ctor_1">DispatcherTimer(DispatcherPriority)</a></td>
<td>Creates a timer that uses the UI thread's Dispatcher2 to process the timer event at the specified priority.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherTimer__ctor_2">DispatcherTimer(TimeSpan, DispatcherPriority, EventHandler)</a></td>
<td>Creates a timer that uses the UI thread's Dispatcher2 to process the timer event at the specified priority after the specified timeout.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Threading_DispatcherTimer_Dispatcher">Dispatcher</a></td>
<td>Gets the dispatcher this timer is associated with.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Threading_DispatcherTimer_Interval">Interval</a></td>
<td>Gets or sets the time between timer ticks.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Threading_DispatcherTimer_IsEnabled">IsEnabled</a></td>
<td>Gets or sets whether the timer is running.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Threading_DispatcherTimer_Tag">Tag</a></td>
<td>Any data that the caller wants to pass along with the timer.</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherTimer_Run">Run(Func(Boolean), TimeSpan, DispatcherPriority)</a></td>
<td>Starts a new timer.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherTimer_RunOnce">RunOnce(Action, TimeSpan, DispatcherPriority)</a></td>
<td>Runs a method once, after the specified interval.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherTimer_Start">Start()</a></td>
<td>Starts the timer.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherTimer_Stop">Stop()</a></td>
<td>Stops the timer.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Threading_DispatcherTimer_Tick">Tick</a></td>
<td>Occurs when the specified timer interval has elapsed and the timer is enabled.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

