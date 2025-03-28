# RoutedEvent&lt;TEventArgs&gt; Class




## Definition
**Namespace:** <a href="N_Avalonia_Interactivity">Avalonia.Interactivity</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class RoutedEvent<TEventArgs> : RoutedEvent
where TEventArgs : RoutedEventArgs

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class RoutedEvent(Of TEventArgs As RoutedEventArgs)
	Inherits RoutedEvent
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type RoutedEvent<'TEventArgs when 'TEventArgs : RoutedEventArgs> = 
    class
        inherit RoutedEvent
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Interactivity/RoutedEvent.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a>  →  RoutedEvent(TEventArgs)</td></tr>
</table>



#### Type Parameters
<dl><dt /><dd /></dl>

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Interactivity_RoutedEvent_1__ctor">RoutedEvent(TEventArgs)(String, RoutingStrategies, Type)</a></td>
<td>Initializes a new instance of the RoutedEvent(TEventArgs) class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEvent_EventArgsType">EventArgsType</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEvent_HasRaisedSubscriptions">HasRaisedSubscriptions</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEvent_Name">Name</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEvent_OwnerType">OwnerType</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEvent_Raised">Raised</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEvent_RouteFinished">RouteFinished</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Interactivity_RoutedEvent_RoutingStrategies">RoutingStrategies</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Interactivity_RoutedEvent_AddClassHandler">AddClassHandler(Type, EventHandler(RoutedEventArgs), RoutingStrategies, Boolean)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Interactivity_RoutedEvent_1_AddClassHandler__1">AddClassHandler(TTarget)(Action(TTarget, TEventArgs), RoutingStrategies, Boolean)</a></td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Interactivity">Avalonia.Interactivity Namespace</a>  

