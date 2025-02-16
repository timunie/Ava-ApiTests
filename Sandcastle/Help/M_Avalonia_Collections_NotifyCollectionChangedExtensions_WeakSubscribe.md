---
title:WeakSubscribe(INotifyCollectionChanged, Action&lt;NotifyCollectionChangedEventArgs&gt;) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# WeakSubscribe(INotifyCollectionChanged, Action&lt;NotifyCollectionChangedEventArgs&gt;) Method




## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static IDisposable WeakSubscribe(
	this INotifyCollectionChanged collection,
	Action<NotifyCollectionChangedEventArgs> handler
)
```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function WeakSubscribe ( 
	collection As INotifyCollectionChanged,
	handler As Action(Of NotifyCollectionChangedEventArgs)
) As IDisposable
```
**F#**
``` F#
[<ExtensionAttribute>]
static member WeakSubscribe : 
        collection : INotifyCollectionChanged * 
        handler : Action<NotifyCollectionChangedEventArgs> -> IDisposable 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventargs" target="_blank" rel="noopener noreferrer">NotifyCollectionChangedEventArgs</a>)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Collections_NotifyCollectionChangedExtensions">NotifyCollectionChangedExtensions Class</a>  
<a href="Overload_Avalonia_Collections_NotifyCollectionChangedExtensions_WeakSubscribe">WeakSubscribe Overload</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  
