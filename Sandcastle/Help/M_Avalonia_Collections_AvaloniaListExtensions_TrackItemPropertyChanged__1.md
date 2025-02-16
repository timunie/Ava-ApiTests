---
title:TrackItemPropertyChanged&lt;T&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TrackItemPropertyChanged&lt;T&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static IDisposable TrackItemPropertyChanged<T>(
	this IAvaloniaReadOnlyList<T> collection,
	Action<Tuple<Object?, PropertyChangedEventArgs>> callback
)

```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function TrackItemPropertyChanged(Of T) ( 
	collection As IAvaloniaReadOnlyList(Of T),
	callback As Action(Of Tuple(Of Object, PropertyChangedEventArgs))
) As IDisposable
```
**F#**
``` F#
[<ExtensionAttribute>]
static member TrackItemPropertyChanged : 
        collection : IAvaloniaReadOnlyList<'T> * 
        callback : Action<Tuple<Object, PropertyChangedEventArgs>> -> IDisposable 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Collections_IAvaloniaReadOnlyList_1">IAvaloniaReadOnlyList</a>(T)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="https://learn.microsoft.com/dotnet/api/system.tuple-2" target="_blank" rel="noopener noreferrer">Tuple</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventargs" target="_blank" rel="noopener noreferrer">PropertyChangedEventArgs</a>))</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Collections_IAvaloniaReadOnlyList_1">IAvaloniaReadOnlyList</a>(T). When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Collections_AvaloniaListExtensions">AvaloniaListExtensions Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  
