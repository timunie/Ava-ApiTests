---
title:WeakEvent&lt;TSender, TEventArgs&gt; Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# WeakEvent&lt;TSender, TEventArgs&gt; Class




## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public sealed class WeakEvent<TSender, TEventArgs> : WeakEvent
where TSender : class
where TEventArgs : EventArgs

```
**VB**
``` VB
Public NotInheritable Class WeakEvent(Of TSender As Class, TEventArgs As EventArgs)
	Inherits WeakEvent
```
**F#**
``` F#
[<SealedAttribute>]
type WeakEvent<'TSender, 'TEventArgs when 'TSender : not struct when 'TEventArgs : EventArgs> = 
    class
        inherit WeakEvent
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Utilities_WeakEvent">WeakEvent</a>  →  WeakEvent(TSender, TEventArgs)</td></tr>
</table>



#### Type Parameters
<dl><dt /><dd /><dt /><dd /></dl>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Utilities_WeakEvent_2_Subscribe">Subscribe(TSender, IWeakEventSubscriber(TEventArgs))</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Utilities_WeakEvent_2_Unsubscribe">Unsubscribe(TSender, IWeakEventSubscriber(TEventArgs))</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  
