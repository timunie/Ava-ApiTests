# AvaloniaSynchronizationContext Class


SynchronizationContext to be used on main thread



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class AvaloniaSynchronizationContext : SynchronizationContext
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class AvaloniaSynchronizationContext
	Inherits SynchronizationContext
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type AvaloniaSynchronizationContext = 
    class
        inherit SynchronizationContext
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/AvaloniaSynchronizationContext.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.threading.synchronizationcontext" target="_blank" rel="noopener noreferrer">SynchronizationContext</a>  →  AvaloniaSynchronizationContext</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Threading_AvaloniaSynchronizationContext__ctor">AvaloniaSynchronizationContext()</a></td>
<td>Initializes a new instance of the AvaloniaSynchronizationContext class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_AvaloniaSynchronizationContext__ctor_2">AvaloniaSynchronizationContext(DispatcherPriority)</a></td>
<td>Initializes a new instance of the AvaloniaSynchronizationContext class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_AvaloniaSynchronizationContext__ctor_1">AvaloniaSynchronizationContext(Dispatcher, DispatcherPriority)</a></td>
<td>Initializes a new instance of the AvaloniaSynchronizationContext class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Threading_AvaloniaSynchronizationContext_AutoInstall">AutoInstall</a></td>
<td>Controls if SynchronizationContext should be installed in InstallIfNeeded. Used by Designer.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.threading.synchronizationcontext.createcopy" target="_blank" rel="noopener noreferrer">CreateCopy()</a></td>
<td>When overridden in a derived class, creates a copy of the synchronization context.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.threading.synchronizationcontext" target="_blank" rel="noopener noreferrer">SynchronizationContext</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_AvaloniaSynchronizationContext_Ensure_1">Ensure(DispatcherPriority)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_AvaloniaSynchronizationContext_Ensure">Ensure(Dispatcher, DispatcherPriority)</a></td>
<td> </td>
</tr>
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
<td><a href="M_Avalonia_Threading_AvaloniaSynchronizationContext_InstallIfNeeded">InstallIfNeeded()</a></td>
<td>Installs synchronization context in current thread</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.threading.synchronizationcontext.iswaitnotificationrequired" target="_blank" rel="noopener noreferrer">IsWaitNotificationRequired()</a></td>
<td>Determines if wait notification is required.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.threading.synchronizationcontext" target="_blank" rel="noopener noreferrer">SynchronizationContext</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.threading.synchronizationcontext.operationcompleted" target="_blank" rel="noopener noreferrer">OperationCompleted()</a></td>
<td>When overridden in a derived class, responds to the notification that an operation has completed.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.threading.synchronizationcontext" target="_blank" rel="noopener noreferrer">SynchronizationContext</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.threading.synchronizationcontext.operationstarted" target="_blank" rel="noopener noreferrer">OperationStarted()</a></td>
<td>When overridden in a derived class, responds to the notification that an operation has started.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.threading.synchronizationcontext" target="_blank" rel="noopener noreferrer">SynchronizationContext</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_AvaloniaSynchronizationContext_Post">Post(SendOrPostCallback, Object)</a></td>
<td>When overridden in a derived class, dispatches an asynchronous message to a synchronization context.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.threading.synchronizationcontext.post" target="_blank" rel="noopener noreferrer">SynchronizationContext.Post(SendOrPostCallback, Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_AvaloniaSynchronizationContext_Send">Send(SendOrPostCallback, Object)</a></td>
<td>When overridden in a derived class, dispatches a synchronous message to a synchronization context.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.threading.synchronizationcontext.send" target="_blank" rel="noopener noreferrer">SynchronizationContext.Send(SendOrPostCallback, Object)</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.threading.synchronizationcontext.setwaitnotificationrequired" target="_blank" rel="noopener noreferrer">SetWaitNotificationRequired()</a></td>
<td>Sets notification that wait notification is required and prepares the callback method so it can be called more reliably when a wait occurs.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.threading.synchronizationcontext" target="_blank" rel="noopener noreferrer">SynchronizationContext</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_AvaloniaSynchronizationContext_Wait">Wait(IntPtr[], Boolean, Int32)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.threading.synchronizationcontext.wait" target="_blank" rel="noopener noreferrer">SynchronizationContext.Wait(IntPtr[], Boolean, Int32)</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

