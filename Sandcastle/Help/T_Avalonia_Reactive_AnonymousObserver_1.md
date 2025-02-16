---
title:AnonymousObserver&lt;T&gt; Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# AnonymousObserver&lt;T&gt; Class




## Definition
**Namespace:** <a href="N_Avalonia_Reactive">Avalonia.Reactive</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public class AnonymousObserver<T> : IObserver<T>

```
**VB**
``` VB
Public Class AnonymousObserver(Of T)
	Implements IObserver(Of T)
```
**F#**
``` F#
type AnonymousObserver<'T> = 
    class
        interface IObserver<'T>
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AnonymousObserver(T)</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iobserver-1" target="_blank" rel="noopener noreferrer">IObserver</a>(T)</td></tr>
</table>



#### Type Parameters
<dl><dt /><dd /></dl>

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Reactive_AnonymousObserver_1__ctor_3">AnonymousObserver(T)(Action(T))</a></td>
<td>Initializes a new instance of the AnonymousObserver(T) class</td></tr>
<tr>
<td><a href="M_Avalonia_Reactive_AnonymousObserver_1__ctor_4">AnonymousObserver(T)(TaskCompletionSource(T))</a></td>
<td>Initializes a new instance of the AnonymousObserver(T) class</td></tr>
<tr>
<td><a href="M_Avalonia_Reactive_AnonymousObserver_1__ctor">AnonymousObserver(T)(Action(T), Action)</a></td>
<td>Initializes a new instance of the AnonymousObserver(T) class</td></tr>
<tr>
<td><a href="M_Avalonia_Reactive_AnonymousObserver_1__ctor_2">AnonymousObserver(T)(Action(T), Action(Exception))</a></td>
<td>Initializes a new instance of the AnonymousObserver(T) class</td></tr>
<tr>
<td><a href="M_Avalonia_Reactive_AnonymousObserver_1__ctor_1">AnonymousObserver(T)(Action(T), Action(Exception), Action)</a></td>
<td>Initializes a new instance of the AnonymousObserver(T) class</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Reactive_AnonymousObserver_1_OnCompleted">OnCompleted()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Reactive_AnonymousObserver_1_OnError">OnError(Exception)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Reactive_AnonymousObserver_1_OnNext">OnNext(T)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Reactive">Avalonia.Reactive Namespace</a>  
